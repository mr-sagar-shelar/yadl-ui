import type { Meta, StoryObj } from "@storybook/react";
import ClickHere from "../ClickHere";

const meta: Meta<typeof ClickHere> = { title: "unDraw/ClickHere", component: ClickHere };

export default meta;
type Story = StoryObj<typeof ClickHere>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
