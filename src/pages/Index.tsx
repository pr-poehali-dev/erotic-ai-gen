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
    { id: 1, name: 'Капитан Зара', age: 35, personality: 'Опытный космолетчик с железной волей', role: 'Протагонист' },
    { id: 2, name: 'Доктор Кейн', age: 42, personality: 'Гениальный ученый с темным прошлым', role: 'Антагонист' },
    { id: 3, name: 'Лина', age: 28, personality: 'Журналист, ищущий правду', role: 'Союзник' }
  ]);
  
  const storyTemplates = [
    { id: 1, title: 'Путешествие героя', description: 'Классическая структура: призыв → испытания → трансформация' },
    { id: 2, title: 'Загадка и разгадка', description: 'Детективная структура с системой улик и красных селедок' },
    { id: 3, title: 'Противостояние', description: 'Конфликт между двумя силами с неожиданным разрешением' },
    { id: 4, title: 'Превращение', description: 'История изменения персонажа под влиянием событий' }
  ];

  const generateStory = async () => {
    setIsGenerating(true);
    // Симуляция генерации
    setTimeout(() => {
      setGeneratedStory('Генерируется уникальная история на основе выбранного жанра, стиля и персонажей. ИИ создает оригинальный сюжет с проработанными диалогами, описаниями и развитием характеров. Это демо-версия - в полной версии будут доступны расширенные настройки и экспорт в различные форматы.');
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
                <Icon name="PenTool" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF8B6B] to-[#70d0d0] bg-clip-text text-transparent">
                WriteCraft
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-[#FF8B6B] text-[#FF8B6B]">
                Платформа для писателей
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
                  <Icon name="PenTool" size={24} className="mr-3 text-[#FF8B6B]" />
                  Генератор творческих историй
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="theme" className="text-sm font-medium">Основная идея</Label>
                  <Input 
                    id="theme"
                    placeholder="Детектив в космосе, драма о дружбе, комедия ошибок..."
                    className="mt-2 bg-gray-800/50 border-gray-700 focus:border-[#FF8B6B]"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Жанр</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-gray-800/50 border-gray-700">
                      <SelectValue placeholder="Выберите жанр" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-800">
                      <SelectItem value="fantasy">📚 Фантастика</SelectItem>
                      <SelectItem value="mystery">🔍 Детектив</SelectItem>
                      <SelectItem value="drama">🎭 Драма</SelectItem>
                      <SelectItem value="comedy">😄 Комедия</SelectItem>
                      <SelectItem value="romance">💕 Романтика</SelectItem>
                      <SelectItem value="thriller">⚡ Триллер</SelectItem>
                      <SelectItem value="horror">👻 Хоррор</SelectItem>
                      <SelectItem value="adventure">🏴‍☠️ Приключения</SelectItem>
                    </SelectContent>
                  </Select>
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
                      <SelectItem value="first-person">От первого лица</SelectItem>
                      <SelectItem value="third-person">От третьего лица</SelectItem>
                      <SelectItem value="dialogue">Диалоговый</SelectItem>
                      <SelectItem value="descriptive">Описательный</SelectItem>
                      <SelectItem value="minimalist">Минималистичный</SelectItem>
                      <SelectItem value="poetic">Поэтичный</SelectItem>
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
                      <Button variant="outline" size="sm" className="border-gray-700">
                        <Icon name="Share" size={16} className="mr-2" />
                        Поделиться
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Панель персонажей и шаблонов */}
          <div>
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Users" size={20} className="mr-2 text-[#70d0d0]" />
                  Творческие инструменты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="characters" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-800/50">
                    <TabsTrigger value="characters" className="data-[state=active]:bg-[#FF8B6B] text-xs">
                      Герои
                    </TabsTrigger>
                    <TabsTrigger value="create" className="data-[state=active]:bg-[#FF8B6B] text-xs">
                      Создать
                    </TabsTrigger>
                    <TabsTrigger value="templates" className="data-[state=active]:bg-[#FF8B6B] text-xs">
                      Шаблоны
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
                              <Badge size="sm" variant="outline" className="mt-2 text-xs border-[#70d0d0] text-[#70d0d0]">
                                {character.role}
                              </Badge>
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
                      <Label htmlFor="char-name" className="text-sm">Имя персонажа</Label>
                      <Input 
                        id="char-name"
                        placeholder="Елена Стоун"
                        className="mt-1 bg-gray-800/50 border-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="char-role" className="text-sm">Роль в истории</Label>
                      <Select>
                        <SelectTrigger className="mt-1 bg-gray-800/50 border-gray-700">
                          <SelectValue placeholder="Выберите роль" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800">
                          <SelectItem value="protagonist">Главный герой</SelectItem>
                          <SelectItem value="antagonist">Антагонист</SelectItem>
                          <SelectItem value="ally">Союзник</SelectItem>
                          <SelectItem value="mentor">Наставник</SelectItem>
                          <SelectItem value="sidekick">Помощник</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="char-personality" className="text-sm">Характер и мотивация</Label>
                      <Textarea 
                        id="char-personality"
                        placeholder="Опишите личность, цели и внутренние конфликты персонажа..."
                        className="mt-1 bg-gray-800/50 border-gray-700"
                        rows={3}
                      />
                    </div>
                    <Button className="w-full bg-[#70d0d0] hover:bg-[#70d0d0]/90 text-black">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Создать персонажа
                    </Button>
                  </TabsContent>

                  <TabsContent value="templates" className="space-y-3 mt-4">
                    {storyTemplates.map((template) => (
                      <Card key={template.id} className="bg-gray-800/30 border-gray-700 cursor-pointer hover:border-[#FF8B6B] transition-colors">
                        <CardContent className="p-3">
                          <h4 className="font-medium text-[#FF8B6B] text-sm">{template.title}</h4>
                          <p className="text-xs text-gray-400 mt-1">{template.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                    <Button variant="outline" className="w-full border-gray-700 text-xs">
                      <Icon name="Library" size={14} className="mr-2" />
                      Больше шаблонов
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Статистика и вдохновение */}
            <Card className="mt-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="BarChart3" size={18} className="mr-2 text-[#70d0d0]" />
                  Ваши достижения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Создано историй</span>
                  <span className="font-semibold text-[#FF8B6B]">42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Персонажей</span>
                  <span className="font-semibold text-[#70d0d0]">{characters.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Использовано шаблонов</span>
                  <span className="font-semibold">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Слов написано</span>
                  <span className="font-semibold text-[#FF8B6B]">12,487</span>
                </div>
              </CardContent>
            </Card>

            {/* Промпт дня */}
            <Card className="mt-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="Lightbulb" size={18} className="mr-2 text-[#FF8B6B]" />
                  Идея дня
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 leading-relaxed">
                  "Что если в мире, где эмоции имеют физическую форму, главный герой потерял способность их чувствовать?"
                </p>
                <Button variant="ghost" size="sm" className="mt-3 text-[#70d0d0] hover:text-[#70d0d0]/80">
                  <Icon name="RefreshCw" size={14} className="mr-2" />
                  Другая идея
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;