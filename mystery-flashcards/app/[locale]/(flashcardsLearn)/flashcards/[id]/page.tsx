import FlashcardContainer from '@/components/common/FlashcardContainer';
import AddToFavModal from '@/components/flashcards/flashcardDetails/AddToFavModal';
import StartLearningModal from '@/components/flashcards/flashcardDetails/StartLearningModal';
import { fetchDictionary } from '@/dictionaries/dictionaries';
import { FlashCardSetDto } from '@/dtos/FlashCardSetDto';
import { getFlashcardSetRequest } from '@/utils/client/ApiUtils';
import { createCookieHeader } from '@/utils/client/RestUtils';
import { cookies } from 'next/headers';
import React from 'react'

export default async function FlashcardsDetails({ params }: { params: { locale: string, id: string } }) {
  const dictionary = await fetchDictionary(params.locale);
  const flashcardSetId = params.id;
  const { flashcardSet, statistics }: FlashCardSetDto = await getFlashcardSetRequest(flashcardSetId, createCookieHeader(cookies()));

  return (
    <div>
      {renderActionButtons()}
      {flashcardSet?.flashcards?.map(card => <FlashcardContainer dictionary={dictionary} key={card.wordLang1} card={card} />)}
    </div>
  )

  function renderActionButtons() {
    return (
      <div className="mb-12 flex justify-end">
        <StartLearningModal dictionary={dictionary} flashcardSet={flashcardSet} locale={params.locale} />
        <AddToFavModal dictionary={dictionary} flashcardSet={flashcardSet} />
      </div>
    )
  }
}
