import type { Meta, StoryObj } from "@storybook/react";
import Beyondcorp from "../Beyondcorp";

const meta: Meta<typeof Beyondcorp> = { title: "GCP/Beyondcorp", component: Beyondcorp };

export default meta;
type Story = StoryObj<typeof Beyondcorp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
