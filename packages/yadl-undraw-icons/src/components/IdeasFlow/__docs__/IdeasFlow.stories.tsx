import type { Meta, StoryObj } from "@storybook/react";
import IdeasFlow from "../IdeasFlow";

const meta: Meta<typeof IdeasFlow> = { title: "unDraw/IdeasFlow", component: IdeasFlow };

export default meta;
type Story = StoryObj<typeof IdeasFlow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
