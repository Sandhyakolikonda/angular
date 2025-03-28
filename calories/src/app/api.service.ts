import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
  private readonly apiKey = 'Cs7wmA0/PCgKZkwLr+53Fg==AJ8VjmVZ7BxBuzXf';


  
  constructor(private http: HttpClient) { }

  getNutritionInfo(food: string): Observable<any> {
    const prompt = `Provide nutritional information for ${food} in this strict format:
    
    ===BEGIN FORMAT===
    Calories: [number] kcal
    Protein: [number] g
    Carbs: [number] g
    Fat: [number] g
    Fiber: [number] g
    Sugar: [number] g
    Summary: [2-3 sentence health summary]
    ===END FORMAT===

    Example for "1 medium banana":
    Calories: 105 kcal
    Protein: 1.3 g
    Carbs: 27 g
    Fat: 0.4 g
    Fiber: 3.1 g
    Sugar: 14 g
    Summary: Bananas are rich in potassium...`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      contents: [{
        parts: [{
          text: `You are a Calorie Teller AI specialized in providing precise nutritional information for various food items. Your task is to respond with the total calorie count and key nutrients for each food item presented to you. Here are the details for your responses:  

Food Item: __________


Your response should be a single line containing the total calories and major nutrients (e.g., protein, carbohydrates, fats) of the food item, formatted as follows:"Food item: ___ | Calories: ___ | Protein: ___g | Carbs: ___g | Fats: ___g"  

Keep your answers concise and only include essential information without any additional commentary or context.  

Example: "Apple | Calories: 95 | Protein: 0.5g | Carbs: 25g | Fats: 0.3g"  

Be wary of providing inaccurate information; ensure the data is reliable and up-to-date based on common nutritional databases.`
+food
        }]
      }],
      generationConfig: {
        temperature: 0.3,  // More deterministic responses
        maxOutputTokens: 300,
        response_mime_type: "text/plain"  // Ensures clean text response
      }
    };

    return this.http.post(`${this.apiUrl}?key=${this.apiKey}`, body, { headers })
      .pipe(
        catchError(error => {
          console.error('API Error Details:', {
            status: error.status,
            message: error.message,
            error: error.error
          });
          return throwError(() => new Error('API request failed. Check console for details.'));
        })
      );
  }
}