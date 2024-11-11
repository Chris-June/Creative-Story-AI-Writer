import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, SendHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

type WritingEditorProps = {
  content: string[];
  onSubmit: (text: string) => void;
  isLoading?: boolean;
};

export function WritingEditor({
  content,
  onSubmit,
  isLoading = false,
}: WritingEditorProps) {
  const [currentInput, setCurrentInput] = useState('');

  const handleSubmit = () => {
    if (currentInput.trim()) {
      onSubmit(currentInput.trim());
      setCurrentInput('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {content.map((text, index) => (
          <div
            key={index}
            className={cn(
              'p-4 rounded-lg',
              index % 2 === 0
                ? 'bg-muted'
                : 'bg-primary/10 dark:bg-primary/20'
            )}
          >
            <p className="whitespace-pre-wrap">{text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Textarea
          placeholder="Continue the story..."
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          className="min-h-[100px]"
        />
        <Button
          onClick={handleSubmit}
          disabled={isLoading || !currentInput.trim()}
          className="self-end"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <SendHorizontal className="h-4 w-4" />
          )}
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
}