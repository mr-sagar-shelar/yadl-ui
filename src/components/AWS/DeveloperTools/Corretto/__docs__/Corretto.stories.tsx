import type { Meta, StoryObj } from "@storybook/react";
import Corretto from "../Corretto";

const meta: Meta<typeof Corretto> = { title: "AWS/DeveloperTools/Corretto", component: Corretto };

export default meta;
type Story = StoryObj<typeof Corretto>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
