import type { Meta, StoryObj } from "@storybook/react";
import PleasantSurprise from "../PleasantSurprise";

const meta: Meta<typeof PleasantSurprise> = { title: "unDraw/PleasantSurprise", component: PleasantSurprise };

export default meta;
type Story = StoryObj<typeof PleasantSurprise>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
