import type { Meta, StoryObj } from "@storybook/react";
import OnlinePage from "../OnlinePage";

const meta: Meta<typeof OnlinePage> = { title: "unDraw/OnlinePage", component: OnlinePage };

export default meta;
type Story = StoryObj<typeof OnlinePage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
