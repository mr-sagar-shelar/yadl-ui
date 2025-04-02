import type { Meta, StoryObj } from "@storybook/react";
import Azul from "../Azul";

const meta: Meta<typeof Azul> = { title: "SkillIcon/Azul", component: Azul };

export default meta;
type Story = StoryObj<typeof Azul>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
