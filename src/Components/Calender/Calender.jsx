import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const renderDays = () => {
    const days = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-4" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate?.getDate() === day && 
                        selectedDate?.getMonth() === currentDate.getMonth() &&
                        selectedDate?.getFullYear() === currentDate.getFullYear();
      const isToday = new Date().getDate() === day && 
                      new Date().getMonth() === currentDate.getMonth() &&
                      new Date().getFullYear() === currentDate.getFullYear();

      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(day)}
          className={`relative group `}
        >
          <div className={`
            aspect-square flex items-center justify-center m-1
            rounded-full text-sm transition-all duration-300
            ${isSelected ? 'bg-slate-400 text-white shadow-lg scale-105' : 
              isToday ? 'bg-blue-500 text-purple-600 font-semibold text-2xl' : 
              'hover:bg-slate-500 hover:scale-105'}
          `}>
            <span className="relative z-10">{day}</span>
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full h-full bg-[#182638] shadow-2xl rounded-3xl p-8">
      {/* Header Title */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold text-white">Calendar</h1>
      </div>

      {/* Navigation and Month Display */}
      <div className="flex justify-between items-center mb-8 ">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-red-500 rounded-full transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-green-400 rounded-full transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 mb-4">
        {dayNames.map(day => (
          <div key={day} className="text-center font-medium text-white text-sm">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 text-white border-t  ">
        {renderDays()}
      </div>

      {/* Selected Date Display */}
      {selectedDate && (
        <div className="mt-8 p-4 rounded-2xl">
          <div className="text-center">
            <span className="text-white font-medium">
              Selected: {selectedDate.toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;