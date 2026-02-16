import { useEffect, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const localTime = time.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="flex flex-col" role="timer" aria-label={`Current time: ${localTime}`}>
      <span className="text-3xl font-bold tracking-tight text-foreground tabular-nums group-hover:text-primary transition-colors duration-500" aria-live="polite" aria-atomic="true">
        {localTime.toLowerCase()}
      </span>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em]">
          EST
        </span>
      </div>
    </div>
  );
}
