export type UploadProps = {
  isRound?: boolean;
  onClick?: () => void;
  onDrop?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  error?: boolean;
};
