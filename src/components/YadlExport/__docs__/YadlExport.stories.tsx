import type { Meta, StoryObj } from "@storybook/react";
import YadlExport from "../YadlExport";

const meta: Meta<typeof YadlExport> = {
  title: "YadlExport",
  component: YadlExport,
};

export default meta;
type Story = StoryObj<typeof YadlExport>;

export const Primary: Story = {
  args: {
    width: 300,
    height: 500,
  },
};
