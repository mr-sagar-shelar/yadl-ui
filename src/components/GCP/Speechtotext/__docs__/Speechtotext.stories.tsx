import type { Meta, StoryObj } from "@storybook/react";
import Speechtotext from "../Speechtotext";

const meta: Meta<typeof Speechtotext> = { title: "GCP/Speechtotext", component: Speechtotext };

export default meta;
type Story = StoryObj<typeof Speechtotext>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
