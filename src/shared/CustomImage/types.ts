export type TCustomImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  withDeleteIcon?: boolean;
  onSVGClick?: () => void;
  onDeleteClick?: () => void;
  defaultIcon?: React.ReactNode;
  $pointer?: boolean;
  $borderRaduis?: string;
  $aspectRatio?: string;
  width?: string;
  height?: string;
};

export type TImageProps = {
  $borderRaduis: string;
  $pointer: boolean;
  width: string;
  height: string;
  $aspectRatio?: string;
  $objectFit: string;
};

export type TWrapperStyledProps = {
  $borderRaduis: string;
  width: string;
  height: string;
};
