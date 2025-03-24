import type { Meta, StoryObj } from "@storybook/react";
import VSCodium from "../VSCodium";

const meta: Meta<typeof VSCodium> = { title: "SkillSet/VSCodium", component: VSCodium };

export default meta;
type Story = StoryObj<typeof VSCodium>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
