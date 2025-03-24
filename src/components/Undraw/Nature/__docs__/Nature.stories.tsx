import type { Meta, StoryObj } from "@storybook/react";
import Nature from "../Nature";

const meta: Meta<typeof Nature> = { title: "unDraw/Nature", component: Nature };

export default meta;
type Story = StoryObj<typeof Nature>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
