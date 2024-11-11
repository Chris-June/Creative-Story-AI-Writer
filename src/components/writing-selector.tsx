import { Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { WritingCategory, WritingStyle } from '@/lib/types';

type WritingSelectorProps = {
  categories: WritingCategory[];
  selectedCategory: string;
  selectedStyle: string;
  onSelectCategory: (categoryId: string) => void;
  onSelectStyle: (styleId: string) => void;
};

export function WritingSelector({
  categories,
  selectedCategory,
  selectedStyle,
  onSelectCategory,
  onSelectStyle,
}: WritingSelectorProps) {
  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons];
    return Icon ? <Icon className="h-5 w-5" /> : null;
  };

  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
        {categories.map((category) => {
          const isSelected = category.id === selectedCategory;
          return (
            <div key={category.id} className="space-y-4">
              <button
                onClick={() => onSelectCategory(category.id)}
                className={cn(
                  'w-full text-left px-4 py-2 rounded-lg transition-colors',
                  isSelected
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                )}
              >
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </button>
              {isSelected && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.styles.map((style) => {
                    const isStyleSelected = style.id === selectedStyle;
                    return (
                      <Card
                        key={style.id}
                        className={cn(
                          'cursor-pointer transition-colors hover:bg-muted',
                          isStyleSelected && 'border-primary'
                        )}
                        onClick={() => onSelectStyle(style.id)}
                      >
                        <CardHeader className="relative">
                          <div className="flex items-center gap-2">
                            {getIcon(style.icon)}
                            <CardTitle className="text-lg">{style.name}</CardTitle>
                          </div>
                          {isStyleSelected && (
                            <Check className="absolute right-6 top-6 h-5 w-5 text-primary" />
                          )}
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{style.description}</CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}