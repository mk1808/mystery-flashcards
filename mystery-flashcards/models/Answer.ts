import { Schema, SchemaTypes, model, models } from 'mongoose';
import { FlashcardT } from './Flashcard';

export const answerSchema = new Schema({
    flashcardId: {
        type: Schema.Types.ObjectId,
        required: [true, 'flashcardId is required.'],
    },
    isCorrect: {
        type: Boolean,
        required: [true, 'isCorrect is required.'],
    },
    givenAnswer: {
        type: SchemaTypes.Mixed,
        required: [true, 'givenAnswer is required.'],
    },
    attempt: {
        type: String
    }
});

const Answer = models.Answer || model('Answer', answerSchema);

export type AnswerT = {
    _id?: string,
    flashcardId?: string,
    flashcard?: FlashcardT,
    isCorrect?: Boolean,
    givenAnswer?: string,
    attempt?: string
};

export default Answer;