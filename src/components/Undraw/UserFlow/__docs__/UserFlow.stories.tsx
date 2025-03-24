import type { Meta, StoryObj } from "@storybook/react";
import UserFlow from "../UserFlow";

const meta: Meta<typeof UserFlow> = { title: "unDraw/UserFlow", component: UserFlow };

export default meta;
type Story = StoryObj<typeof UserFlow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
