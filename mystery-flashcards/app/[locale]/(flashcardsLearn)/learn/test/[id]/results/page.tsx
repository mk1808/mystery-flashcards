import TestResultTable from '@/components/learn/test/TestResultTable'
import { fetchDictionary } from '@/dictionaries/dictionaries';
import { getFlashcardSetRequest } from '@/utils/client/ApiUtils';
import { executeServerSideRequest } from '@/utils/server/restUtils';
import React from 'react'

export default async function LearnTestResults({ params }: { params: { id: string, locale: string } }) {
  const dictionary = await fetchDictionary(params.locale);

  const flashcardSetDto = await executeServerSideRequest(getFlashcardSetRequest, params.id);
  const view = "TEST_RESULT"

  return (
    <TestResultTable flashcardSetDto={flashcardSetDto} dictionary={dictionary} view={view} locale={params.locale} />
  )
}
