import { useEffect, useState, type FormEvent } from "react";
import { IoClose } from "react-icons/io5";
import "../ContactModal/style.css";
import "./request-modal.css";

interface InstallmentRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const banks = [
  "ПриватБанк",
  "monobank",
  "Укрсиббанк",
  "IdeaBank",
  "Плати пізніше",
  "ПУМБ",
];

const HELP_WITH_BANK = "Ще не визначився — потрібна допомога з вибором банку";

export function InstallmentRequestModal({
  isOpen,
  onClose,
}: InstallmentRequestModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+380 ");
  const [bank, setBank] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) return;
    setName("");
    setPhone("+380 ");
    setBank("");
    setIsLoading(false);
    setSubmitted(false);
    setError("");
  }, [isOpen]);

  const getPhoneDigits = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.startsWith("380")) return digits.slice(3, 12);
    if (digits.startsWith("0")) return digits.slice(1, 10);
    return digits.slice(0, 9);
  };

  const formatPhone = (value: string) => {
    const digits = getPhoneDigits(value);
    return digits ? `+380 ${digits}` : "+380 ";
  };

  const phoneDigits = getPhoneDigits(phone);
  const isValid = name.trim().length > 1 && phoneDigits.length === 9 && bank;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid || isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://kuhni-back.vercel.app/api/installment-request-garderobny",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            phone: phoneDigits,
            bank: bank === "help" ? HELP_WITH_BANK : bank,
          }),
        },
      );

      if (!response.ok) throw new Error("Не вдалося надіслати заявку");
      setSubmitted(true);
    } catch (submitError) {
      console.error(submitError);
      setError("Не вдалося надіслати заявку. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="contact-modal installment-request-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="installment-request-title"
      >
        <button
          type="button"
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Закрити"
        >
          <IoClose />
        </button>

        {submitted ? (
          <div className="contact-modal-success">
            <div className="contact-modal-success-icon">✓</div>
            <h3 className="contact-modal-title" id="installment-request-title">
              Дякуємо!
            </h3>
            <p className="contact-modal-subtitle">
              Менеджер зв’яжеться з вами щодо оформлення розстрочки.
            </p>
            <button
              type="button"
              className="contact-modal-button"
              onClick={onClose}
            >
              Закрити
            </button>
          </div>
        ) : (
          <>
            <h3 className="contact-modal-title" id="installment-request-title">
              Оформити розстрочку
            </h3>
            <p className="contact-modal-subtitle installment-request-subtitle">
              Залиште контакти й оберіть банк — менеджер допоможе з оформленням.
            </p>

            <form className="contact-modal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Ваше ім’я"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="+380 500000000"
                autoComplete="tel"
                inputMode="numeric"
                maxLength={14}
                value={phone}
                onChange={(event) => setPhone(formatPhone(event.target.value))}
                required
              />
              <select
                className="installment-request-select"
                name="bank"
                value={bank}
                onChange={(event) => setBank(event.target.value)}
                required
              >
                <option value="" disabled>
                  Оберіть банк
                </option>
                {banks.map((bankName) => (
                  <option value={bankName} key={bankName}>
                    {bankName}
                  </option>
                ))}
                <option value="help">Ще не визначився/лась — потрібна допомога</option>
              </select>

              {error && (
                <p className="installment-request-error" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="contact-modal-button"
                disabled={!isValid || isLoading}
              >
                {isLoading ? "Відправляємо..." : "Надіслати заявку"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
