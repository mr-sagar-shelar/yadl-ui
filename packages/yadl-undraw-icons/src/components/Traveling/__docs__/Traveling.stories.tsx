import type { Meta, StoryObj } from "@storybook/react";
import Traveling from "../Traveling";

const meta: Meta<typeof Traveling> = { title: "unDraw/Traveling", component: Traveling };

export default meta;
type Story = StoryObj<typeof Traveling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
