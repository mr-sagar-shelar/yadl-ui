import type { Meta, StoryObj } from "@storybook/react";
import ActiveSupport from "../ActiveSupport";

const meta: Meta<typeof ActiveSupport> = { title: "unDraw/ActiveSupport", component: ActiveSupport };

export default meta;
type Story = StoryObj<typeof ActiveSupport>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
