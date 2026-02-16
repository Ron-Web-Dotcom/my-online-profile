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
    timeZone: 'America/Jamaica',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="flex flex-col" role="timer" aria-label={`Current time in Kingston, Jamaica: ${localTime}`}>
      <span className="text-2xl font-bold tracking-tight text-foreground/90 tabular-nums" aria-live="polite" aria-atomic="true">
        {localTime.toLowerCase()}
      </span>
      <span className="text-[10px] font-medium text-muted-foreground/50 uppercase tracking-widest mt-0.5">
        EST (Kingston, JA)
      </span>
    </div>
  );
}
