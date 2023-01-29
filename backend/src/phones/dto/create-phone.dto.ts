import { IsInt, IsString } from 'class-validator';
export class CreatePhoneDto {
  @IsInt()
  inches: number;

  @IsString()
  price: string;

  @IsString()
  color: string;

  @IsString()
  type: string;

  @IsInt()
  raiting: number;

  @IsString()
  urlImage: string;
}
