import type { Meta, StoryObj } from "@storybook/react";
import ApplicationComposer from "../ApplicationComposer";

const meta: Meta<typeof ApplicationComposer> = { title: "AWS/DeveloperTools/ApplicationComposer", component: ApplicationComposer };

export default meta;
type Story = StoryObj<typeof ApplicationComposer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
