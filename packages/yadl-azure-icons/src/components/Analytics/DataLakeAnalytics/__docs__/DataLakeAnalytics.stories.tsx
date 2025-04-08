import type { Meta, StoryObj } from "@storybook/react";
import DataLakeAnalytics from "../DataLakeAnalytics";

const meta: Meta<typeof DataLakeAnalytics> = { title: "Azure/Analytics/DataLakeAnalytics", component: DataLakeAnalytics };

export default meta;
type Story = StoryObj<typeof DataLakeAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
