import type { Meta, StoryObj } from "@storybook/react";
import OnlineGroceries from "../OnlineGroceries";

const meta: Meta<typeof OnlineGroceries> = { title: "unDraw/OnlineGroceries", component: OnlineGroceries };

export default meta;
type Story = StoryObj<typeof OnlineGroceries>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
