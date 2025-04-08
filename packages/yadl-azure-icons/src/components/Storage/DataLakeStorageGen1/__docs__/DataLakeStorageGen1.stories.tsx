import type { Meta, StoryObj } from "@storybook/react";
import DataLakeStorageGen1 from "../DataLakeStorageGen1";

const meta: Meta<typeof DataLakeStorageGen1> = { title: "Azure/Storage/DataLakeStorageGen1", component: DataLakeStorageGen1 };

export default meta;
type Story = StoryObj<typeof DataLakeStorageGen1>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
