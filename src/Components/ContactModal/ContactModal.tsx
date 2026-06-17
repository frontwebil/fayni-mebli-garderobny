import { useState, useEffect, type FormEvent } from "react";
import { IoClose } from "react-icons/io5";
import "./style.css";
import axios from "axios";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function ContactModal({ isOpen, onClose, title }: ContactModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+380 ");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setPhone("+380 ");
      setSubmitted(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  const getPhoneDigits = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (!digits) return "";
    if (digits.startsWith("380")) return digits.slice(3, 12);
    if (digits.startsWith("0")) return digits.slice(1, 10);
    return digits.slice(0, 9);
  };

  const formatPhone = (value: string) => {
    const digits = getPhoneDigits(value);
    if (!digits) return "+380 ";
    return `+380 ${digits}`;
  };

  const phoneDigits = getPhoneDigits(phone);
  const isValid = name.trim().length > 1 && phoneDigits.length === 9;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || isLoading) return;

    setIsLoading(true);

    try {
      await axios.post(
        "https://kuhni-back.vercel.app/api/sendMessageToTelegramGarderobny",
        {
          name,
          phone: phone.slice(4, phone.length),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setPhone("");
      setName("");
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
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
            <h3 className="contact-modal-title">Дякуємо!</h3>
            <p className="contact-modal-subtitle">
              Ми зв'яжемося з вами найближчим часом
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
            <h3 className="contact-modal-title">{title}</h3>
            <p className="contact-modal-subtitle">
              Залиште свої контактні дані і ми зв'яжемося з вами
            </p>
            <form className="contact-modal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ваше ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <input
                type="tel"
                placeholder="+380 500000000"
                inputMode="numeric"
                maxLength={14}
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
              />
              <button
                type="submit"
                className="contact-modal-button"
                disabled={!isValid || isLoading}
              >
                {isLoading && <span className="spinner"></span>}
                {isLoading ? "Відправляємо..." : "Відправити"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
