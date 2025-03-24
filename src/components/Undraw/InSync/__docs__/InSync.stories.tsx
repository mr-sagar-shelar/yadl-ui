import type { Meta, StoryObj } from "@storybook/react";
import InSync from "../InSync";

const meta: Meta<typeof InSync> = { title: "unDraw/InSync", component: InSync };

export default meta;
type Story = StoryObj<typeof InSync>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
