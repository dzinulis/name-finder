import { List } from "antd";
import { NameInfo } from "../api/fetchNames";
import { NameListEntry } from "./NameListEntry";

function wordCount(data: NameInfo[]): string {
  var count: number = data.length;
  if (count > 0) {
    var ending: string = data.length.toString().slice(-1) === '1' ? "s" : "i";
    return "Atrast" + ending + " " + count + " vārd" + ending;
  } else {
    return "Nav atrasts neviens vārds";
  }
}

export const NameList = (data: NameInfo[]) => {

  return (
    <div style={{ width: "200" }}>
      <h3>{wordCount(data)}:</h3>
      <List
        bordered
        dataSource={data}
        renderItem={(nameInfo: NameInfo) => (
          <List.Item>
            <List.Item.Meta title={nameInfo.name} />
            {NameListEntry(nameInfo)}
          </List.Item>
        )}
      />
    </div>
  )
}