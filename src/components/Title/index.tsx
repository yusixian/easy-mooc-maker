/*
 * @Author: cos
 * @Date: 2022-04-28 17:10:40
 * @LastEditTime: 2022-04-28 17:24:07
 * @LastEditors: cos
 * @Description: 标题
 * @FilePath: \easy-mooc-maker\src\components\Title\index.tsx
 */
import './index.less';
export interface ITitleProps {
  text: string;
}
const Title: React.FC<ITitleProps> = ({ text }: ITitleProps) => {
  return <div className="__title">{text}</div>;
};

export default Title;
