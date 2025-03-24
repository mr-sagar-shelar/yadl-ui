import type { Meta, StoryObj } from "@storybook/react";
import Pride from "../Pride";

const meta: Meta<typeof Pride> = { title: "unDraw/Pride", component: Pride };

export default meta;
type Story = StoryObj<typeof Pride>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
