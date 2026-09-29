import { ReactNode } from 'react'

// Типизация Props
interface CustomButtonProps {
  children: ReactNode; // Всё, что будет внутри тегов кнопки (текст, иконки)
  onClick?: () => void;
  variant?: 'primary' | 'danger'; // Ограничиваем выбор стилей кнопки
}

export default function CustomButton({
  children,
  onClick,
  variant = 'primary'
}: CustomButtonProps) {

  const baseStyles = "px-3 py-1.5 rounded-lg text-sm font-medium transition duration-200 cursor-pointer text-center border";
  
  const variantStyles = variant === 'primary' 
    ? "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300" 
    : "bg-red-50 border-red-100 text-red-600 hover:bg-red-100 hover:border-red-200";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
    >
      {children}
    </button>
  )
}