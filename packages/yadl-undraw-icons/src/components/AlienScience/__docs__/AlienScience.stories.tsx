import type { Meta, StoryObj } from "@storybook/react";
import AlienScience from "../AlienScience";

const meta: Meta<typeof AlienScience> = { title: "unDraw/AlienScience", component: AlienScience };

export default meta;
type Story = StoryObj<typeof AlienScience>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
