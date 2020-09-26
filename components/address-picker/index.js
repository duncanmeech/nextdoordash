import { Mag, RightArrow } from "../icons";

export default function ({ activated }) {
  return (
    <div className="address">
      <Mag />
      <input placeholder="Enter Delivery Address" onFocus={activated} />
      <RightArrow />
      <style jsx>{`
        .address {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 60vw;
          font-size: 18px;
          line-height: 24px;
          border-radius: 1000px;
          padding: 8px 12px;
          outline: none;
          box-sizing: content-box;
          border: 4px solid transparent;
          background-color: white;
          color: rgb(73, 73, 73);
        }
        .address input {
          border: none;
          outline: none;
          font-size: 14px;
        }

        .address svg {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
