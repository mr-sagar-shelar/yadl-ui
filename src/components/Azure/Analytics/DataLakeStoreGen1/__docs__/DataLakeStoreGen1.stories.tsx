import type { Meta, StoryObj } from "@storybook/react";
import DataLakeStoreGen1 from "../DataLakeStoreGen1";

const meta: Meta<typeof DataLakeStoreGen1> = { title: "Azure/Analytics/DataLakeStoreGen1", component: DataLakeStoreGen1 };

export default meta;
type Story = StoryObj<typeof DataLakeStoreGen1>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
