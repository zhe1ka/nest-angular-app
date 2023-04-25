import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users' })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  avatar: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  location: string;

  @Prop({ type: Object, required: true })
  weather: {
    type: string;
    min: number;
    max: number;
    current: number;
    code: number;
  };

  @Prop({ type: Object, required: true })
  coordinate: {
    lat: string;
    lng: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
