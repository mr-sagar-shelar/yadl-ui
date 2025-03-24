import type { Meta, StoryObj } from "@storybook/react";
import Actix from "../Actix";

const meta: Meta<typeof Actix> = { title: "SkillSet/Actix", component: Actix };

export default meta;
type Story = StoryObj<typeof Actix>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
