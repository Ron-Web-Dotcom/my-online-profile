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
    <div className="flex flex-col space-y-1" role="timer" aria-label={`Current time in Kingston, Jamaica: ${localTime}`}>
      <span className="text-3xl font-bold tracking-tight text-foreground/90 tabular-nums" aria-live="polite" aria-atomic="true">
        {localTime.toLowerCase()}
      </span>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
          EST (Kingston, JA)
        </span>
      </div>
    </div>
  );
}
