import type { Meta, StoryObj } from "@storybook/react";
import CodeCatalyst from "../CodeCatalyst";

const meta: Meta<typeof CodeCatalyst> = { title: "AWS/DeveloperTools/CodeCatalyst", component: CodeCatalyst };

export default meta;
type Story = StoryObj<typeof CodeCatalyst>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
