import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})

  export class ChatbotComponent {
    userInput = '';
    isLoading = false;
    messages: {sender: string, content: string, nutritionData?: any}[] = [];
    error = '';
  
    constructor(private apiService: ApiService) {}
  
    async sendMessage() {
      if (!this.userInput.trim()) {
        this.error = 'Please enter a food item like "1 banana" or "200g chicken"';
        return;
      }
  
      this.isLoading = true;
      this.error = '';
      
      
      this.messages.push({
        sender: 'user',
        content: this.formatInput(this.userInput)
      });
  
      const foodQuery = this.userInput;
      this.userInput = '';
  
      try {
        const response = await this.apiService.getNutritionInfo(foodQuery).toPromise();
        console.log('Full API Response:', response);
        
        const content = response?.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (!content) {
          throw new Error('Empty response from API');
        }
  
        const nutritionData = this.parseNutritionResponse(content);
        
        this.messages.push({
          sender: 'bot',
          content: nutritionData.summary || 'Here are the nutrition details:',
          nutritionData: nutritionData
        });
      } catch (err) {
        console.error('Error:', err);
        this.error = 'Failed to get nutrition info. Try: "1 banana", "200g chicken"';
      } finally {
        this.isLoading = false;
      }
    }
  
    private formatInput(input: string): string {
      return input
        .replace(/\b(one|two|three)\b/gi, match => 
          ({one: '1', two: '2', three: '3'}[match.toLowerCase()] || match))
        .replace(/\b(\d+)\s*(grams?|g)\b/gi, '$1g')
        .trim();
    }
  
    private parseNutritionResponse(content: string): any {
      const result: any = {};
      const lines = content.split('\n');
      
      lines.forEach(line => {
        if (line.includes('Calories:')) result.calories = line.split(':')[1].trim();
        if (line.includes('Protein:')) result.protein = line.split(':')[1].trim();
        if (line.includes('Carbs:')) result.carbs = line.split(':')[1].trim();
        if (line.includes('Fat:')) result.fat = line.split(':')[1].trim();
        if (line.includes('Fiber:')) result.fiber = line.split(':')[1].trim();
        if (line.includes('Sugar:')) result.sugar = line.split(':')[1].trim();
        if (line.includes('Summary:')) result.summary = line.split(':')[1].trim();
      });
      
      return result;
    }
  }