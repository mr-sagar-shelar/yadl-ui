import type { Meta, StoryObj } from "@storybook/react";
import GoLang from "../GoLang";

const meta: Meta<typeof GoLang> = { title: "SkillSet/GoLang", component: GoLang };

export default meta;
type Story = StoryObj<typeof GoLang>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
