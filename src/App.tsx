import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { WritingSelector } from '@/components/writing-selector';
import { WritingEditor } from '@/components/writing-editor';
import { writingCategories } from '@/lib/writing-options';
import { Pen } from 'lucide-react';
import { cn } from '@/lib/utils';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [content, setContent] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (text: string) => {
    setContent((prev) => [...prev, text]);
    setIsLoading(true);
    
    // Simulate AI response - Replace with actual API call
    setTimeout(() => {
      const aiResponse = "This is a simulated AI response. Replace this with actual API integration.";
      setContent((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="flex items-center gap-2 font-semibold">
              <Pen className="h-5 w-5" />
              <span>AI Writing Assistant</span>
            </div>
            <div className="flex flex-1 items-center justify-end">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="container py-6">
          <div className="grid gap-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Choose Your Style</h2>
              <WritingSelector
                categories={writingCategories}
                selectedCategory={selectedCategory}
                selectedStyle={selectedStyle}
                onSelectCategory={setSelectedCategory}
                onSelectStyle={setSelectedStyle}
              />
            </section>

            {selectedStyle && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Start Writing</h2>
                <WritingEditor
                  content={content}
                  onSubmit={handleSubmit}
                  isLoading={isLoading}
                />
              </section>
            )}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;