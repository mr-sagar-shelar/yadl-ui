import type { Meta, StoryObj } from "@storybook/react";
import ArcDataservices from "../ArcDataservices";

const meta: Meta<typeof ArcDataservices> = { title: "Azure/Other/ArcDataservices", component: ArcDataservices };

export default meta;
type Story = StoryObj<typeof ArcDataservices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
