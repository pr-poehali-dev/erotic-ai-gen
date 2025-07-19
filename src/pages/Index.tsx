import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [generatedStory, setGeneratedStory] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [characters, setCharacters] = useState([
    { id: 1, name: 'Алекс', age: 25, personality: 'Страстный и уверенный' },
    { id: 2, name: 'Мия', age: 23, personality: 'Загадочная и чувственная' }
  ]);

  const generateStory = async () => {
    setIsGenerating(true);
    // Симуляция генерации
    setTimeout(() => {
      setGeneratedStory('История генерируется на основе ваших настроек персонажей и предпочтений. В полной версии здесь будет работать продвинутый ИИ-генератор, создающий уникальные сюжеты.');
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FF8B6B] to-[#70d0d0] rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF8B6B] to-[#70d0d0] bg-clip-text text-transparent">
                StoryAI
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-[#FF8B6B] text-[#FF8B6B]">
                Бесплатно
              </Badge>
              <Button variant="outline" size="sm" className="border-gray-700">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Генератор историй */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Icon name="BookOpen" size={24} className="mr-3 text-[#FF8B6B]" />
                  Генератор историй
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="theme" className="text-sm font-medium">Тема истории</Label>
                  <Input 
                    id="theme"
                    placeholder="Романтическая встреча в кафе..."
                    className="mt-2 bg-gray-800/50 border-gray-700 focus:border-[#FF8B6B]"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Длина истории</Label>
                  <div className="mt-2 space-y-2">
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Короткая</span>
                      <span>Средняя</span>
                      <span>Длинная</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Стиль повествования</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-gray-800/50 border-gray-700">
                      <SelectValue placeholder="Выберите стиль" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-800">
                      <SelectItem value="romantic">Романтический</SelectItem>
                      <SelectItem value="passionate">Страстный</SelectItem>
                      <SelectItem value="mysterious">Загадочный</SelectItem>
                      <SelectItem value="playful">Игривый</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={generateStory}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-[#FF8B6B] to-[#70d0d0] hover:from-[#FF8B6B]/90 hover:to-[#70d0d0]/90 text-white font-semibold py-3 text-lg"
                >
                  {isGenerating ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Генерируется...
                    </>
                  ) : (
                    <>
                      <Icon name="Sparkles" size={20} className="mr-2" />
                      Создать историю
                    </>
                  )}
                </Button>

                {generatedStory && (
                  <div className="mt-6 p-6 bg-gray-800/30 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-[#70d0d0]">Ваша история:</h3>
                    <Textarea 
                      value={generatedStory}
                      readOnly
                      className="min-h-32 bg-transparent border-none p-0 resize-none text-gray-200"
                    />
                    <div className="flex justify-end mt-4 space-x-2">
                      <Button variant="outline" size="sm" className="border-gray-700">
                        <Icon name="Copy" size={16} className="mr-2" />
                        Копировать
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-700">
                        <Icon name="Download" size={16} className="mr-2" />
                        Сохранить
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Панель персонажей */}
          <div>
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Users" size={20} className="mr-2 text-[#70d0d0]" />
                  Персонажи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="characters" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-800/50">
                    <TabsTrigger value="characters" className="data-[state=active]:bg-[#FF8B6B]">
                      Персонажи
                    </TabsTrigger>
                    <TabsTrigger value="create" className="data-[state=active]:bg-[#FF8B6B]">
                      Создать
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="characters" className="space-y-4 mt-4">
                    {characters.map((character) => (
                      <Card key={character.id} className="bg-gray-800/30 border-gray-700">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-[#FF8B6B]">{character.name}</h4>
                              <p className="text-sm text-gray-400">Возраст: {character.age}</p>
                              <p className="text-xs text-gray-500 mt-1">{character.personality}</p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Icon name="Edit" size={16} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="create" className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="char-name" className="text-sm">Имя</Label>
                      <Input 
                        id="char-name"
                        placeholder="Введите имя"
                        className="mt-1 bg-gray-800/50 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="char-age" className="text-sm">Возраст</Label>
                      <Input 
                        id="char-age"
                        type="number"
                        placeholder="25"
                        className="mt-1 bg-gray-800/50 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="char-personality" className="text-sm">Характер</Label>
                      <Textarea 
                        id="char-personality"
                        placeholder="Опишите характер персонажа..."
                        className="mt-1 bg-gray-800/50 border-gray-700"
                        rows={3}
                      />
                    </div>
                    <Button className="w-full bg-[#70d0d0] hover:bg-[#70d0d0]/90 text-black">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Создать персонажа
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Статистика */}
            <Card className="mt-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="BarChart3" size={18} className="mr-2 text-[#70d0d0]" />
                  Статистика
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Создано историй</span>
                  <span className="font-semibold text-[#FF8B6B]">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Персонажей</span>
                  <span className="font-semibold text-[#70d0d0]">{characters.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Избранное</span>
                  <span className="font-semibold">8</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;