import type { Meta, StoryObj } from "@storybook/react";
import DataReports from "../DataReports";

const meta: Meta<typeof DataReports> = { title: "unDraw/DataReports", component: DataReports };

export default meta;
type Story = StoryObj<typeof DataReports>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
