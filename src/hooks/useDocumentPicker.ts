import {useState} from 'react';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';

interface DocumentPickerHook {
  chooseFiles: (
    fileTypes: DocumentPicker.types | null,
  ) => Promise<DocumentPickerResponse>;
}

const useDocumentPicker = (): DocumentPickerHook => {
  const [isLoading, setIsLoading] = useState(false);

  const chooseFiles = async (
    fileTypes: DocumentPicker.types | null,
  ): Promise<DocumentPickerResponse> => {
    try {
      const result = await DocumentPicker.pick({
        type: fileTypes,
      });
      return result;
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        throw err;
      } else {
        throw err;
      }
    }
  };

  return {chooseFiles};
};

export default useDocumentPicker;
