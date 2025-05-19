import React from 'react';

export function Table({ children, className = "" }) {
  return <table className={`w-full border-collapse ${className}`}>{children}</table>;
}

export function TableBody({ children, className = "" }) {
  return <tbody className={className}>{children}</tbody>;
}

export function TableCell({ children, className = "" }) {
  return <td className={`border px-4 py-2 ${className}`}>{children}</td>;
}

export function TableHead({ children, className = "" }) {
  return <th className={`border px-4 py-2 font-bold text-left ${className}`}>{children}</th>;
}

export function TableHeader({ children, className = "" }) {
  return <thead className={` ${className}`}>{children}</thead>;
}

export function TableRow({ children, className = "" }) {
  return <tr className={` ${className}`}>{children}</tr>;
}
