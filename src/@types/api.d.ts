declare module "api" {
    export interface LoginResponse {
      token: string;
      user: {
        id: number;
        name: string;
        email: string;
      };
    }
  
    export interface LoginRequest {
      username: string;
      password: string;
    }
  
    export interface APIError {
      message: string;
      code: number;
    }
  }
  